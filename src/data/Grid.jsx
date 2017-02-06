import {observable} from "mobx"

class Grid {
  @observable id = "-1";
  @observable name = "default name";

  @observable columns = [[0]];
  @observable lines = [[0]];
  @observable board = [];
}

export default new Grid()
