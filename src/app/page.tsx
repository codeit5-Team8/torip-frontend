export default function Home() {
  const unusedVariable = "I'm not used"; // ESLint 경고 발생
  console.log('This is a debug log'); // ESLint 경고 발생

  return <div className="bg-blue-500">Hello, Next.js!</div>;
}
