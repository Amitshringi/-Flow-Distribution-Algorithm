const Astrologer = require('../models/Astrologer');
const User = require('../models/User');
const { distributeUsers } = require('../services/distributionService');

test('Distribute users evenly among astrologers', () => {
    const astrologers = [
        new Astrologer(1, 'Astrologer 1'),
        new Astrologer(2, 'Astrologer 2'),
        new Astrologer(3, 'Astrologer 3'),
    ];

    const users = [
        new User(1),
        new User(2),
        new User(3),
    ];

    const result = distributeUsers(users, astrologers);

    expect(result[0].currentFlow).toBe(1);
    expect(result[1].currentFlow).toBe(1);
    expect(result[2].currentFlow).toBe(1);
});
