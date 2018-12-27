const { getUserId } = require('../utils')

function feed(root, args, context, info) {
    return context.prisma.links()
}

function votes(root, args, context, info) {
    const userId = getUserId(context)

    return context.prisma.votes()
}

module.exports = {
    feed,
    votes,
}