const { getUserId } = require('../utils')

async function feed(root, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
        ],
    } : {}
    
    const links = await context.prisma.links({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
    })

    return links
}

function votes(root, args, context, info) {
    const userId = getUserId(context)

    return context.prisma.votes()
}

module.exports = {
    feed,
    votes,
}