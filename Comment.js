document.getElementById('submit-button').addEventListener('click', function() {
    // Get the value from the input field
    const inputField = document.getElementById('comment-input');
    const newComment = inputField.value.trim();

    // Check if the input is not empty
    if (newComment !== '') {
        // Create a new div element for the comment
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerText = newComment;

        // Append the new comment to the comments container
        document.getElementById('comments-container').appendChild(commentDiv);

        // Clear the input field
        inputField.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
});
