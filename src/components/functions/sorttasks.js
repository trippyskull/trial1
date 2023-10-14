export function sortTasks(tasks, orderingOption) {
  if (orderingOption === "Priority") {
    return Object.entries(tasks).sort(([aKey], [bKey]) => aKey - bKey);
  } else if (orderingOption === "Title") {
    return Object.entries(tasks).sort(([aKey, aTasks], [bKey, bTasks]) => {
      const titleA = aTasks[0].title[0].toLowerCase();
      const titleB = bTasks[0].title[0].toLowerCase();
      if (titleA < titleB) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  return [];
}
