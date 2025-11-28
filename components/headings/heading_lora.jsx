import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

export default function HeadingLora({ children }) {
  return <section className={lora.className}>{children}</section>;
}
