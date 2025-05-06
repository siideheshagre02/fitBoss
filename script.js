document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const memberName = document.getElementById('memberName').value;
    const memberPhone = document.getElementById('memberPhone').value;

    if (memberName && memberPhone) {
        const memberList = document.getElementById('membersList');
        const memberDiv = document.createElement('div');
        memberDiv.innerHTML = `<strong>${memberName}</strong> - ${memberPhone}`;
        memberList.appendChild(memberDiv);

        // Clear the form fields after submission
        document.getElementById('memberName').value = '';
        document.getElementById('memberPhone').value = '';
    }
});
