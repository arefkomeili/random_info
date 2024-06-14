document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('user-info');
    const getUserBtn = document.getElementById('get-user-btn');

    getUserBtn.addEventListener('click', () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const firstName = user.name.first;
                const lastName = user.name.last;
                const email = user.email;
                const imageURL = user.picture.large;

                userInfoDiv.innerHTML = `
                    <img src="${imageURL}" alt="User Image">
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                userInfoDiv.innerHTML = '<p>Error fetching user data</p>';
            });
    });
});
