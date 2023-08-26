import SocialLink from '@/components/social-link';
import { socialLinks } from '@/data';

export default function Home() {
  return (
    <main className="flex grow justify-center bg-slate-100 dark:bg-slate-800">
      <div className="container mt-[calc(12vh+40px)] flex justify-center p-4">
        <div className="flex flex-col text-center dark:text-slate-100">
          <h1 className="text-5xl md:text-6xl">
            Hello<span className="text-teal-400">,</span> I<span>&rsquo;</span>m
            Hanz<span className="text-teal-400">.</span>
          </h1>
          <p className="mt-6 text-2xl md:text-3xl">
            Fullstack software developer based in Bay Area, California.
          </p>
          <ul className=" mt-10 inline-flex justify-center gap-8">
            {socialLinks.map(({ href, icon, text }) => (
              <SocialLink key={text} href={href} icon={icon} text={text} />
            ))}
          </ul>
          <h2 className="mb-1 mt-24 text-2xl">Projects</h2>
          <hr className="mx-auto mb-3 w-[20px] rounded-sm border-2 border-teal-400" />
          <p className="text-xl">
            <a
              href="https://stock-news-gpt.hanzluo.com/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Stock News GPT
            </a>
          </p>
          <p className="text-xl">
            <a
              href="https://github.com/lhz516/react-h5-audio-player"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              React H5 Audio Player
            </a>
          </p>
          <p className="text-xl">
            <a
              href="https://github.com/lhz516/react-simple-i18n"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              React Simple I18n
            </a>
          </p>
          <p className="text-xl">
            <a
              href="https://github.com/lhz516/webpack-react-express-ssr"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Webpack React Express SSR
            </a>
          </p>
          <h2 className="mb-1 mt-24 text-2xl">Contact</h2>
          <hr className="mx-auto mb-3 w-[20px] rounded-sm border-2 border-teal-400" />
          <p className="text-xl">hi@hanzluo.com</p>
          {/* <h2 className="text-3xl"></h2>
          <ul className="inline-flex justify-center gap-5"></ul> */}
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Hanz Luo - Fullstack software developer',
  description:
    'I am a fullstack software developer based in Bay Area, California. I am passionate about building web applications and solving problems.',
};
