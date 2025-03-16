declare module "gradient-cursor" {
  /**
   * Options for configuring the gradient cursor effect.
   */
  interface GradientCursorOptions {
    /** The background color of the body (default: "#1c2742"). */
    backgroundColor?: string;
    
    /** The RGB color of the gradient (without opacity, default: "15, 23, 42"). */
    gradientColor?: string;
    
    /** The size of the gradient circle (e.g., "10vmax", "100px"). Defaults to "10vmax". */
    gradientSize?: string;
  }

  /**
   * Applies a gradient cursor effect that follows the mouse.
   * 
   * @param options Configuration options for the gradient effect.
   */
  function applyGradientCursor(options?: GradientCursorOptions): void;

  export = applyGradientCursor;
}

