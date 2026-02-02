import SkillIcon from './SkillIcon';

const skillIcons = [
  {
    imgSrc: 'images/skill-icons/c.svg',
    label: 'C',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/skill-icons/swift.svg',
    label: 'Swift',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/skill-icons/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/skill-icons/aws.svg',
    label: 'AWS',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/skill-icons/gcp.svg',
    label: 'GCP',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/skill-icons/figma.svg',
    label: 'Figma',
    desc: 'Design Tool',
  },
  {
    imgSrc: 'images/skill-icons/git.svg',
    label: 'Git',
    desc: 'Version Control',
  },
  {
    imgSrc: 'images/skill-icons/widgetkit.png',
    label: 'WidgetKit',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/skill-icons/app-intents.png',
    label: 'App Intents',
    desc: 'Framework',
  },
];

const SkillsTile = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-6">
      {skillIcons.map((icon, key) => (
        <SkillIcon key={key} imgSrc={icon.imgSrc} label={icon.label} />
      ))}
    </div>
  );
};

export default SkillsTile;
