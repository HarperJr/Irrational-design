class Multimedia {
  constructor(link, width, height, type) {
    this.link = link;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  ratio() {
    return this.width / this.height;
  }
}
