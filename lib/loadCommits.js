export async function loadCommits() {
  const res = await fetch(
    "https://api.bitbucket.org/2.0/repositories/kaesystems/robolaunch/commits"
  );
  const data = await res.json();
  return data;
}
