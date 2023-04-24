export enum IconCatalog {
  arrowLongLeft = 'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18',
  arrowLongRight = 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3',
  discord = 'M18.93 5.38a16.492 16.492 0 0 0-4.07-1.263.062.062 0 0 0-.066.03c-.186.34-.355.687-.507 1.042a15.223 15.223 0 0 0-4.572 0 10.568 10.568 0 0 0-.514-1.041.064.064 0 0 0-.066-.031 16.447 16.447 0 0 0-4.07 1.263.058.058 0 0 0-.028.023c-2.593 3.873-3.303 7.652-2.955 11.383a.069.069 0 0 0 .027.047 16.587 16.587 0 0 0 4.994 2.525.065.065 0 0 0 .07-.024c.386-.525.727-1.08 1.022-1.662a.063.063 0 0 0-.035-.088 10.925 10.925 0 0 1-1.56-.743.065.065 0 0 1-.032-.052.064.064 0 0 1 .025-.055c.106-.078.209-.16.31-.242a.062.062 0 0 1 .065-.009c3.273 1.494 6.816 1.494 10.05 0a.061.061 0 0 1 .066.008c.1.082.206.165.311.243a.064.064 0 0 1-.005.107c-.499.291-1.02.54-1.561.743a.063.063 0 0 0-.041.063c0 .009.003.017.007.025.3.578.64 1.133 1.02 1.662a.064.064 0 0 0 .07.023 16.534 16.534 0 0 0 5.003-2.524.065.065 0 0 0 .026-.046c.417-4.314-.699-8.062-2.957-11.384a.051.051 0 0 0-.026-.024ZM8.684 14.514c-.985 0-1.797-.904-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.112-.797 2.016-1.798 2.016Zm6.646 0c-.985 0-1.797-.904-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.112-.788 2.016-1.797 2.016Z',
  heart = 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
}

export interface IconProps {
  /**
   * The icon to display
   */
  icon: IconCatalog;

  /**
   * Specify if the icon is solid or not.
   */
  isSolid?: boolean;

  /**
   * Specify the stroke width.
   */
  strokeWidth?: number;

  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * The callback to get notified when the icon was clicked.
   */
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

/**
 * The Icons catalog
 */
export const Icon = ({
  icon = IconCatalog.arrowLongRight,
  isSolid = false,
  strokeWidth = 1.5,
  className,
  onClick,
}: IconProps) => {
  const classes = !isSolid ? `${className} fill-transparent` : className;

  return (
    <svg
      data-testid="Icon"
      className={classes}
      stroke={isSolid ? undefined : 'currentColor'}
      fill={isSolid ? 'currentColor' : undefined}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden="true"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};
