let partyData = {
    date: '',
    description: '',
    inviteMessage: '',
    guests: []
  };
  
  function saveParty() {
    partyData.date = document.getElementById('party-date').value;
    partyData.description = document.getElementById('party-description').value;
    partyData.inviteMessage = document.getElementById('invite-message').value;
  
    renderPartyInfo();
  }
  
  function renderPartyInfo() {
    const output = document.getElementById('party-info-output');
    output.innerHTML = `
      <p><strong>Date:</strong> ${partyData.date}</p>
      <p><strong>Description:</strong> ${partyData.description}</p>
      <p><strong>Invite Message:</strong> ${partyData.inviteMessage}</p>
    `;
  }
  
  function addGuest() {
    const name = document.getElementById('guest-name').value.trim();
    const surname = document.getElementById('guest-surname').value.trim();
  
    if (name && surname) {
      partyData.guests.push({ name, surname });
      updateGuestList();
      document.getElementById('guest-name').value = '';
      document.getElementById('guest-surname').value = '';
    } else {
      alert('Please fill in both name and surname!');
    }
  }
  
  function updateGuestList() {
    const list = document.getElementById('guest-list');
    list.innerHTML = '';
    partyData.guests.forEach((guest, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${guest.name} ${guest.surname}`;
      list.appendChild(li);
    });
  }
  