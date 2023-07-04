// Code Keypad Component Here
function enteringPassword() {
  console.log("Entering password...");
}

function Keypad() {
  return (
    <div>
      Enter password here:
      <input type="password" onChange={enteringPassword} />
    </div>
  );
}

export default Keypad;
