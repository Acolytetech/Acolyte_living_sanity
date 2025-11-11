const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: 'kjwo664m',
  dataset: 'production',
  apiVersion: '2024-06-01',
  token:
    'skqXoCCMVVjhT9JGgcEMA9Iiohe83O3J3IvhSY7lfqKM5C8BNUlBDw9KHdgVFFkEvp9QerrZlWAXsjvYcX9Hr4u48HxXC9DKJVSTaN8MoOxGbUMAeqK74O8Pn97TDvJgsoevsOQ5vUFOTU6SiZ0lUvBKmjmKEfa1TDhgRfNzioGcVZocqMnM', // must have write access
  useCdn: false,
})

async function promoteFirstServicesDoc() {
  try {
    // Step 1: Find the first services document that isn’t already singleton
    const existingServices = await client.fetch(`*[_type == "service" && _id != "service"][0]`)

    if (!existingServices) {
      console.log('❌ No non-singleton services document found.')
      return
    }

    // Step 2: Promote it to _id: "services"
    await client.createOrReplace({
      _id: 'services',
      ...existingServices,
    })

    console.log('✅ Document promoted to singleton with _id: "services".')

    // Step 3: Delete the old one
    await client.delete(existingServices._id)
    console.log(`🗑️  Old document (${existingServices._id}) deleted.`)
  } catch (err) {
    console.error('❌ Error:', err.message)
  }
}

async function migrate() {
  await client
    .createOrReplace({
      _id: 'service',
      _type: 'service',
      caption: 'Follow us on Instagram',
      items: [
        {
          _key: '17232a1df9e0',
          children: [
            {
              _key: 'b821b8418614',
              image: {
                _type: 'image',
                asset: {
                  _ref: 'image-d0e0b743f633b6150f00004016690d8c1ba323f6-1458x1150-png',
                  _type: 'reference',
                },
              },
              title: 'Trademark Registration',
            },
            {
              _key: 'bb6cfc68d4b8',
              title: 'Trademark Objection',
            },
            {
              _key: 'ac258a9addf1',
              title: 'Trademark Renewal',
            },
            {
              _key: '4f6b4c3009f8',
              title: 'Trademark Opposition',
            },
          ],
          title: 'Trademark',
        },
        {
          _key: '4c55a60afb4b',
          children: [
            {
              _key: '89b63dad010f',
              title: 'Compliance1',
            },
            {
              _key: '7ee875e4368c',
              title: 'Compliance2',
            },
          ],
          title: 'Compliance',
        },
        {
          _key: '0dfa5013b7c0',
          children: [
            {
              _key: 'db165a432aee',
              title: 'Tax Filing',
            },
            {
              _key: 'c0081f94a0ac',
              title: 'Consulting',
            },
          ],
          title: 'Income Tax',
        },
        {
          _key: 'a6f8fc59d7dc',
          children: [
            {
              _key: '67f2b65ef043',
              title: 'SEO Services',
            },
            {
              _key: '5c7d3b9d83a3',
              title: 'Social Media Ads',
            },
            {
              _key: '19c46c06b5cf',
              title: 'Content Marketing',
            },
          ],
          title: 'Digital Marketing',
        },
        {
          _key: 'c629c47bc046',
          children: [
            {
              _key: '5cf6e83f68fe',
              title: 'GST Registration',
            },
            {
              _key: '0941f2d0d78b',
              title: 'GST Filing',
            },
          ],
          title: 'GST',
        },
        {
          _key: 'e5823aaa951a',
          children: [
            {
              _key: 'c0b76ea7dc63',
              title: 'Annual Returns',
            },
            {
              _key: 'a8c8a3786b3d',
              title: 'Company Compliance',
            },
          ],
          title: 'ROC Filling',
        },
        {
          _key: '1941530019f4',
          children: [
            {
              _key: '062b602fd659',
              title: 'Investor Pitch',
            },
            {
              _key: '29fd2cb68d58',
              title: 'Fundraising Strategy',
            },
          ],
          title: 'Seed Funding',
        },
        {
          _key: '76cb8ae57558',
          children: [
            {
              _key: '938ef844c680',
              title: 'Event Participation',
            },
            {
              _key: '063d886e7e6a',
              title: 'Networking',
            },
          ],
          title: 'NAIFF',
        },
      ],
      order: 5,
      postImages: [
        {
          _key: '110d370307d3',
          _type: 'image',
          asset: {
            _ref: 'image-adf913fc323fb41a54b402e384c6aeda50ac7b5a-1546x1542-png',
            _type: 'reference',
          },
        },
        {
          _key: '0d9e63e976b4',
          _type: 'image',
          asset: {
            _ref: 'image-113eea2e384e7ba033003ba09daae9bacb0009a3-1602x1596-png',
            _type: 'reference',
          },
        },
        {
          _key: '22db58c156e0',
          _type: 'image',
          asset: {
            _ref: 'image-97d9452048317c7f4f4ac0fe83bf499fbade2480-1602x1598-png',
            _type: 'reference',
          },
        },
        {
          _key: 'a7711a3cfe5a',
          _type: 'image',
          asset: {
            _ref: 'image-881d272731ec46a07d03cdf2eef88aec47f88550-1542x1540-png',
            _type: 'reference',
          },
        },
        {
          _key: 'b19e0b3a67b7',
          _type: 'image',
          asset: {
            _ref: 'image-d7d545dde23bc05a21b9cb883310b4a78c0c9d45-1548x1544-png',
            _type: 'reference',
          },
        },
      ],
      subheading: 'Our top services are displayed below',
      title: 'Our Services',
    })
    .then(() => {
      console.log('✅ footer document migrated successfully.')
    })
    .catch((err) => {
      console.error('❌ Error migrating footer:', err.message)
    })
}
// promoteFirstServicesDoc()
