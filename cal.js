function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (!day || !month || !year) {
      document.getElementById('result').innerText = "Please fill in all fields correctly.";
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    if (birthDate > today) {
      document.getElementById('result').innerText = "Date of birth cannot be in the future.";
      return;
    }
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
  
  document.getElementById('result').innerText = `Your age is ${age} years.`;
     
  }