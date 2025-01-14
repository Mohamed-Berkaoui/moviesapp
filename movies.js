const movies = [
  {
    id: "2",
    title: "The Blacklist",
    description:
      "A former criminal mastermind, Raymond 'Red' Reddington, mysteriously surrenders to the FBI and offers to help catch high-profile criminals under one condition: he will work exclusively with Elizabeth Keen, a rookie profiler.",
    rating: 9.3,
    image: "https://fr.web.img5.acsta.net/pictures/17/08/30/11/50/532007.jpg",
    category: "Action",
  },
  {
    id: "5",
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 8.9,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/l/s/h/medium-pulp-fiction-poster-on-fine-art-paper-13x19-poster3372-original-imah3bzqmksspnjf.jpeg?q=20&crop=false",
    category: "Crime",
  },
  {
    id: "18",
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 8.6,
    image: "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
    category: "Sci-Fi",
  },
  {
    id: "6",
    title: "Fight Club",
    description:
      "An insomniac office worker forms an underground fight club with a soap salesman.",
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
    category: "Drama",
  },
  {
    id: "3",
    title: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    rating: 9.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
    category: "Crime",
  },
  {
    id: "4",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    rating: 9,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
    category: "Action",
  },
  {
    id: "7",
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.",
    rating: 8.8,
    image: "https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg",
    category: "Drama",
  },
  {
    id: "8",
    title: " Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s",
    category: "Sci-Fi",
  },
  {
    id: "9",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A hobbit is tasked with an epic quest to destroy a powerful ring while being pursued by dark forces.",
    rating: 8.8,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg",
    category: "Fantasy",
  },
  {
    id: "10",
    title: "The Silence of the Lambs",
    description:
      "A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer.",
    rating: 8.6,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTIzMTA0NTM4NF5BMl5BanBnXkFtZTcwNjY3ODM0MQ@@._V1_.jpg",
    category: "Thriller",
  },
  {
    id: "11",
    title: "The Usual Suspects",
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a ship, which began when five criminals met at a police lineup.",
    rating: 8.5,
    image:
      "https://musicart.xboxlive.com/7/5b041100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    category: "Mystery",
  },
  {
    id: "12",
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution.",
    rating: 8.9,
    image:
      "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
    category: "Historical",
  },
  {
    id: "13",
    title: "Saving Private Ryan",
    description:
      "In the midst of World War II, Captain Miller and his squad are tasked with rescuing a paratrooper whose brothers have been killed in action.",
    rating: 8.6,
    image:
      "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_.jpg",
    category: "War",
  },
  {
    id: "14",
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    rating: 8.5,
    image:
      "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Action",
  },
  {
    id: "15",
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    rating: 8.5,
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
    category: "Crime",
  },
  {
    id: "16",
    title: "Whiplash",
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    rating: 8.5,
    image: "https://fr.web.img2.acsta.net/pictures/14/09/26/17/53/345974.jpg",
    category: "Drama",
  },
  {
    id: "17",
    title: "The Social Network",
    description:
      "As Harvard students create the social network that would become Facebook, they must deal with both personal and legal complications.",
    rating: 7.7,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
    category: "Biography",
  },
  {
    id: "19",
    title: "The Lion King",
    description:
      "Lion cub and future king Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.",
    rating: 8.5,
    image:
      "https://m.media-amazon.com/images/I/81x1-7zDMsL._AC_UF894,1000_QL80_.jpg",
    category: "Animation",
  },
  {
    id: "20",
    title: "Jurassic Park",
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    rating: "8.2",
    image:
      "https://ynnis-editions.fr/cdn/shop/files/JurassicPark_guideultime_C1_600x.jpg?v=1711984746",
    category: "Adventure",
  },
  {
    id: "7ef1",
    title: "The Killer",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/cf03955bb416df80e5e88285a2a2a717f3c76c14c654fa0c5b1a218c7bec6dba.jpg",
    description:
      "A cold-blooded assassin faces his own moral dilemmas as he grapples with the consequences of his violent life. As a contract goes wrong, he must navigate a web of betrayal and seek redemption.",
    rating: "9.5",
    category: "Thriller",
  },
];


module.exports=movies