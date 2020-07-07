// Factories are used to maintain and manipulate collections of objects that are different but still have many common characteristics.
// A good example would be memberships.  Each membership may be of a different type (e.g. gold, silver, and bronze) but yet they still
// share many common characteristics.

// FACTORY

function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

// CONSTRUCTORS FOR FACTORY

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
}

// RUN MODULE

const factory = new MemberFactory();

// Add members using factory
const members = [];
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Doe', 'standard'));
members.push(factory.createMember('Bill Smith', 'super'));

// forEach takes a callback
members.forEach(function (member) {
  member.define();
})

// Write it another way.  See t.ly/PDwa
members.forEach(member => member.define());