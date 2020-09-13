
class GitHub {
  constructor() {
    this.clientID = 'b1aa840a1b97bc69fcb3';
    this.clientSecret = '4333be80e459d49ad77be1eb52311586e5c7f34b';
  }

  // Create asynchronous function
  async getUser(user) {
    // Get user (profileResponse) and then their repos (profile).
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();

    // Return an object
    return {
      profile
    }
  }
}