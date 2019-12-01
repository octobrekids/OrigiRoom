const rooms = [
  {
    id: "",
    image: "",
    name: "",
    floor: 1,
    size: "",
    capacity: [
      {
        label: "Standing",
        n: 0,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 0,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 0,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 0,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 0,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 0,
      minFee: 0,
      cleaningFee: 0
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Facilitator's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description: "",
    rate: 0,
    category: ""
  }
];

class Room {
  constructor() {
    this.rooms = [];
  }

  addRoom(
    room = {
      id: "",
      image: "",
      name: "",
      floor: 1,
      size: "",
      capacity: [
        {
          label: "Standing",
          n: 0,
          icon: "standing.png"
        },
        {
          label: "Parliament",
          n: 0,
          icon: "parliament.png"
        },
        {
          label: "Theatre",
          n: 0,
          icon: "theatre.png"
        },
        {
          label: "U-Shape",
          n: 0,
          icon: "u-shape.png"
        },
        {
          label: "Block",
          n: 0,
          icon: "block.png"
        }
      ],
      pricing: {
        price: 0,
        minFee: 0,
        cleaningFee: 0
      },
      catering: [
        {
          label: "Coffee & Tea",
          price: 30,
          icon: "CoffeeTea.png"
        },
        {
          label: "Water",
          price: 6,
          icon: "water.png"
        },
        {
          label: "Baby Break Set (1 Snack & 1 Beverage)",
          price: 45,
          icon: "babybreakset.png"
        },
        {
          label: "Little Break Set (2 Snack & 1 Beverage)",
          price: 60,
          icon: "littlebreakset.png"
        },
        {
          label: "Bring your own food",
          price: 0,
          icon: "bringownfood.png"
        }
      ],
      equipment: [
        {
          label: "Flipchart + Stand",
          price: 500,
          maximum: 10,
          icon: "flipchart.png"
        },
        {
          label: "Projector + Screen",
          price: 0,
          maximum: 2,
          icon: "projector.png"
        },
        {
          label: "Pens & Paper",
          price: 0,
          maximum: 10,
          icon: "pens.png"
        },
        {
          label: "TV Screen",
          price: 2000,
          maximum: 10,
          icon: "tvscreen.png"
        },
        {
          label: "Whiteboard",
          price: 0,
          maximum: 10,
          icon: "whiteboard.png"
        },
        {
          label: "Faci's Box (Post it/Marker/Tape)",
          price: 1000,
          maximum: 100,
          icon: "facilitator.png"
        }
      ],
      description: "",
      rate: 0,
      category: ""
    }
  ) {
    if (!room.id) throw new Error("must have an Id");
    this.rooms.push(room);
  }

  getRoom(id) {
    const search = this.rooms.filter(e => e.id === id)[0];
    if (!search) throw new Error("room not found");
    return { ...search };
  }

  deleteRoom(id) {
    const filtered = this.rooms.filter(e => e.id !== id);
    this.rooms = filtered;
  }

  updateRoom(
    id,
    room = {
      image: "",
      name: "",
      floor: 1,
      size: "",
      capacity: [
        {
          label: "Standing",
          n: 0,
          icon: "standing.png"
        },
        {
          label: "Parliament",
          n: 0,
          icon: "parliament.png"
        },
        {
          label: "Theatre",
          n: 0,
          icon: "theatre.png"
        },
        {
          label: "U-Shape",
          n: 0,
          icon: "u-shape.png"
        },
        {
          label: "Block",
          n: 0,
          icon: "block.png"
        }
      ],
      pricing: {
        price: 14000,
        minFee: 12000,
        cleaningFee: 2000
      },
      catering: [
        {
          label: "Coffee & Tea",
          price: 30
        },
        {
          label: "Water",
          price: 6
        },
        {
          label: "Baby Break Set (1 Snack & 1 Beverage)",
          price: 45
        },
        {
          label: "Little Break Set (2 Snack & 1 Beverage)",
          price: 60
        },
        {
          label: "Bring your own food",
          price: 0
        }
      ],
      equipment: [
        {
          label: "Flipchart + Stand",
          price: 500,
          maximum: 10
        },
        {
          label: "Projector + Screen",
          price: 0,
          maximum: 2
        },
        {
          label: "Pens & Paper",
          price: 0,
          maximum: 10
        },
        {
          label: "TV Screen",
          price: 2000,
          maximum: 10
        },
        {
          label: "Whiteboard",
          price: 0,
          maximum: 10
        },
        {
          label: "Faci's Box (Post it/Marker/Tape)",
          price: 1000,
          maximum: 100
        }
      ],
      description: "",
      rate: 0,
      category: ""
    }
  ) {
    const merge = this.rooms.map((e, i) => {
      if (i === id) {
        return {
          ...e,
          ...room
        };
      }
      return e;
    });
    this.rooms = merge;
  }
}

const data = new Room();
data.addRoom(
  (Room = {
    id: "1",
    image: "room1.jpg",
    name: "A01 flex",
    floor: 1,
    size: "30 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 100,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 20,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 10,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 3,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 5,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 8000,
      minFee: 4000,
      cleaningFee: 4000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 4,
    category: "Seminar"
  })
);

data.addRoom(
  (Room = {
    id: "2",
    image: "room2.jpg",
    name: "B02 flex",
    floor: 2,
    size: "30 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 50,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 9,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 5,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 4,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 3,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 9000,
      minFee: 6000,
      cleaningFee: 3000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 5,
    category: "Party"
  })
);

data.addRoom(
  (Room = {
    id: "3",
    image: "room3.jpg",
    name: "B03 flex",
    floor: 2,
    size: "50 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 100,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 20,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 10,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 8,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 10,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 15000,
      minFee: 13000,
      cleaningFee: 2000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 4,
    category: "Seminar"
  })
);

data.addRoom(
  (Room = {
    id: "4",
    image: "room4.jpg",
    name: "C01 flex",
    floor: 3,
    size: "80 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 100,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 20,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 10,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 8,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 10,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 8000,
      minFee: 6000,
      cleaningFee: 2000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 5,
    category: "Seminar"
  })
);

data.addRoom(
  (Room = {
    id: "5",
    image: "room5.jpg",
    name: "D01 flex",
    floor: 4,
    size: "90 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 1000,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 200,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 100,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 80,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 100,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 150000,
      minFee: 130000,
      cleaningFee: 20000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 5,
    category: "Party"
  })
);

data.addRoom(
  (Room = {
    id: "6",
    image: "room6.jpg",
    name: "D02 flex",
    floor: 4,
    size: "60 sq.m.",
    capacity: [
      {
        label: "Standing",
        n: 120,
        icon: "standing.png"
      },
      {
        label: "Parliament",
        n: 10,
        icon: "parliament.png"
      },
      {
        label: "Theatre",
        n: 0,
        icon: "theatre.png"
      },
      {
        label: "U-Shape",
        n: 9,
        icon: "u-shape.png"
      },
      {
        label: "Block",
        n: 5,
        icon: "block.png"
      }
    ],
    pricing: {
      price: 10000,
      minFee: 8000,
      cleaningFee: 2000
    },
    catering: [
      {
        label: "Coffee & Tea",
        price: 30,
        icon: "CoffeeTea.png"
      },
      {
        label: "Water",
        price: 6,
        icon: "water.png"
      },
      {
        label: "Baby Break Set (1 Snack & 1 Beverage)",
        price: 45,
        icon: "babybreakset.png"
      },
      {
        label: "Little Break Set (2 Snack & 1 Beverage)",
        price: 60,
        icon: "littlebreakset.png"
      },
      {
        label: "Bring your own food",
        price: 0,
        icon: "bringownfood.png"
      }
    ],
    equipment: [
      {
        label: "Flipchart + Stand",
        price: 500,
        maximum: 10,
        icon: "flipchart.png"
      },
      {
        label: "Projector + Screen",
        price: 0,
        maximum: 2,
        icon: "projector.png"
      },
      {
        label: "Pens & Paper",
        price: 0,
        maximum: 10,
        icon: "pens.png"
      },
      {
        label: "TV Screen",
        price: 2000,
        maximum: 10,
        icon: "tvscreen.png"
      },
      {
        label: "Whiteboard",
        price: 0,
        maximum: 10,
        icon: "whiteboard.png"
      },
      {
        label: "Faci's Box (Post it/Marker/Tape)",
        price: 1000,
        maximum: 100,
        icon: "facilitator.png"
      }
    ],
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    rate: 3,
    category: "Party"
  })
);

export default data;
