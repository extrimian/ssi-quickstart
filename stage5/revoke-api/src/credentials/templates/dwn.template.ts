export const dwnTemplate = (did: string, id: string, data: any) => {
  const date = Math.floor(new Date().getTime() / 1000);
  
  return {
    target: did,
    messages: [
      {
          data: data,
          descriptor: {
              objectId: id,
              dateCreated: date,
              method: "ThreadsCreate",
              schema: "https://schema.org/LikeAction",
              dataFormat: "application/JSON-LD"
          }
      }
    ]
  }  
}