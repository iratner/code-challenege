/**
 * waits 2 seconds and returns an array of tasks
 *
 * @example [{
 *    id: number,
 *    description: string
 *    date: number (time in milliseconds)
 *    tags: string (comma and space separated words)
 *  }]
 */
export const getAllTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 2000);
  });
};

const tasks = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor,",
    date: 1631329643000,
    tags: "blue, red, indigo"
  },
  {
    id: 2,
    description:
      "volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat",
    date: 1641196730000,
    tags: "green, yellow, violet"
  },
  {
    id: 3,
    description:
      "magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna",
    date: 1639584945000,
    tags: "red, indigo, blue"
  },
  {
    id: 4,
    description:
      "ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel",
    date: 1667232986000,
    tags: "indigo, yellow, red"
  },
  {
    id: 5,
    description:
      "mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida",
    date: 1650673860000,
    tags: "orange, indigo, blue"
  }
];
