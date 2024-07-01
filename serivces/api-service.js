export async function getApplicationSettings(type, delay = false) {
  let fetchOptions = {};

  if (type === "dynamic") {
    fetchOptions = {
      cache: "no-store",
    };
  }
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  const res = await fetch("http://localhost:3000/api/application-settings", fetchOptions);
  return res.json();
}