export class Todo {
  id: string
  title: string = ''
  done: boolean = false

  constructor(title: string) {
    this.id = (Math.random() * 1000000).toFixed()
    this.title = title
  }
};
