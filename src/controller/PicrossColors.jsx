const colors=["lightblue", "blue", "red", "orange", "green", "yellow", "brown", "grey"];
export const getColor = n => n >= colors.length ? colors[0] : colors[n];
