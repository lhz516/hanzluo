import IconClientWrapper from './icon-client-wrapper';

const SocialLink = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: string;
  text: string;
}) => (
  <li className="inline-block">
    <a
      className="inline-flex items-center gap-2  hover:opacity-80"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <IconClientWrapper icon={icon} width={32} height={32} />
      <span className="text-lg">{text}</span>
    </a>
  </li>
);

export default SocialLink;
