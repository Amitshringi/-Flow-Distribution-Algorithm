const distributeUsers = (users, astrologers) => {
    if (astrologers.length === 0) {
        console.error('No astrologers available for distribution');
        return [];
    }

    const normalAstrologers = astrologers.filter(astrologer => !astrologer.isTop);
    const topAstrologers = astrologers.filter(astrologer => astrologer.isTop);

    users.forEach(user => {
        let targetAstrologer;

        // Distribute to top astrologers first if any
        if (topAstrologers.length > 0) {
            targetAstrologer = topAstrologers.reduce((prev, curr) => prev.currentFlow < curr.currentFlow ? prev : curr);
        } else {
            targetAstrologer = normalAstrologers.reduce((prev, curr) => prev.currentFlow < curr.currentFlow ? prev : curr);
        }

        // Initialize currentFlow to 0 if undefined
        if (isNaN(targetAstrologer.currentFlow)) {
            targetAstrologer.currentFlow = 0;
        }

        targetAstrologer.currentFlow += 1;

        console.log(`User ${user.id} distributed to astrologer ${targetAstrologer.id}. Current flow: ${targetAstrologer.currentFlow}`);
    });

    console.log('Updated astrologers:', astrologers);

    return astrologers; // return the updated array of astrologers
};

module.exports = { distributeUsers };
