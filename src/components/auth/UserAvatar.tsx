type Props = { name: string; image?: string | null; className?: string };

const UserAvatar = ({ name, image, className = "w-9 h-9" }: Props) =>
  image ? (
    <div className="avatar">
      <div className={`${className} rounded-lg`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} />
      </div>
    </div>
  ) : (
    <div className="avatar avatar-placeholder">
      <div
        className={`${className} rounded-lg bg-[#DDF0E3] text-[#0A8A3E] font-bold`}
      >
        <span>{name.charAt(0).toUpperCase()}</span>
      </div>
    </div>
  );

export default UserAvatar;