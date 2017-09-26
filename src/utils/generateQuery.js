export default function generateQuery(interface, implementor) {
  return `
    type Query {
      ${implementor}s : [${interface}]
      ${implementor} : ${interface}
    }
  `;
}
