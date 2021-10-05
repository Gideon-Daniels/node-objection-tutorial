
exports.seed = async function(knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');
// creating channels
  await knex('channel').insert([{
      id: 1,
      name: "channel1"
    },
    {
      id:2,
      name:"channel2"
    }
  ])
// creating users
    await knex('user').insert([{
      id: 1,
      name: "user1",
      email: "user1@test.com",
      channelid:1,
    },
    {
      id:2,
      name:"user2",
      email: "user2test.com",
      channelid:2,
    },
    {
      id:3,
      name:"user3",
      email: "user3test.com"
    }
  ]);

  return knex('video').insert([{
      id: 1,
      title: 'video1ByUser1',
      channelId:1
    },
    {
      id: 2,
      title: 'video2ByUser1',
      channelId:1
    },
    {
      id: 3,
      title: 'video3ByUser2',
      channelId:2
  },
])
};
