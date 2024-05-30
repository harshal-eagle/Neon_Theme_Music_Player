document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        document.getElementById('musicList').appendChild(listItem);

        const audioPlayer = document.getElementById('audioPlayer');
        const reader = new FileReader();
        reader.onload = function(e) {
            audioPlayer.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
