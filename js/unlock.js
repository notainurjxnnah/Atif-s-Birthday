function checkBirthday() {
  const now = new Date();
  const target = new Date("2025-10-03T00:00:00");
  if (now >= target) return true;
  alert("Not yet sayang, tunggu birthday okay? 🥹");
  return false;
}
