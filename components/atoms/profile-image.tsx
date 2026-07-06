interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProfileImage = ({
    src,
    alt,
    className = "",
}: ProfileImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`
        w-full
        h-[900]
        object-cover
        rounded-lg
        ${className}
      `}
        />
    );
};

export default ProfileImage;