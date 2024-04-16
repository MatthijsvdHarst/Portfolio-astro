
export interface IUser {
  id: 1,
  username: "Matthijs",
  email: "matthy@mat.com",
  provider: "local",
  confirmed: true,
  blocked: false,
  createdAt: "2024-04-16T12:52:35.635Z",
  updatedAt: "2024-04-16T12:52:35.635Z"
}


export interface IAbout {
  id: number;
  attributes: {
      content: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
  }
  meta: {}
}
