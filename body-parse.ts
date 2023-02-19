export default function bodyParser(ctx: Object): Promise<Object> {
  return new Promise(async(resolve, reject) => {
    try{
      const body = {};
      const data = await ctx.request.body().value;
      const elements = data[Object.getOwnPropertySymbols(data)[0]];
      elements.forEach((element) => body[element[0]] = element[1]);
      resolve(body);
    }catch(err){
      reject(err);
    }
  });
}