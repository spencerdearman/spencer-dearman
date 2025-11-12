import SkillIcon from './SkillIcon';

const skillIcons = [
  {
    imgSrc: 'images/c.svg',
    label: 'C',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/swift.svg',
    label: 'Swift',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/aws.svg',
    label: 'AWS',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/gcp.svg',
    label: 'GCP',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/git.svg',
    label: 'Git',
    desc: 'Version Control',
  },
  {
    imgSrc: 'images/widgetkit.png',
    label: 'WidgetKit',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/app-intents.png',
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
