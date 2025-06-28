# GATE Calculator

A comprehensive scientific calculator browser extension designed specifically for engineering students and professionals preparing for GATE (Graduate Aptitude Test in Engineering) examinations. The calculator provides an overlay interface that can be accessed on any webpage without interrupting your study session.

## Features

### Core Mathematical Operations

- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Modulus, percentage calculations, exponentiation
- **Memory Functions**: Store, recall, add to memory, subtract from memory, clear memory

### Scientific Functions

- **Trigonometric Functions**: sin, cos, tan, cot, sec, cosec
- **Inverse Trigonometric Functions**: sin⁻¹, cos⁻¹, tan⁻¹
- **Hyperbolic Functions**: sinh, cosh, tanh, sech, cosech
- **Inverse Hyperbolic Functions**: sinh⁻¹, cosh⁻¹, tanh⁻¹
- **Logarithmic Functions**: ln (natural log), log (base 10), log₂ (base 2), logᵧx (arbitrary base)
- **Exponential Functions**: eˣ, 10ˣ, xʸ, x², x³
- **Root Functions**: √x, ∛x, ʸ√x (nth root)

### Special Mathematical Constants

- **π (Pi)**: 3.14159...
- **e (Euler's number)**: 2.71828...
- **Mathematical fractions**: π/2, π/3, π/4, π/6
- **Square roots**: √2, √3
- **Cube root**: ∛2
- **Logarithmic constants**: ln(10), log(e)

### Engineering-Specific Features

- **Factorial Function**: n! with support for large numbers
- **Absolute Value**: |x|
- **Sigma Values**: Statistical probability values for quality control (1σ, 3σ, 6σ)
- **Angle Mode Selection**: Degree and Radian modes for trigonometric calculations
- **Scientific Notation**: EXP function for exponential notation
- **Precision Control**: Automatic precision adjustment for different operation types

### User Interface Features

- **Overlay Design**: Non-intrusive calculator that overlays on any webpage
- **Expression Display**: Shows complete mathematical expressions with intermediate steps
- **Parentheses Support**: Complex expression evaluation with proper operator precedence
- **Memory Indicator**: Visual indication when values are stored in memory
- **Minimizable Interface**: Compact mode for reduced screen space usage
- **Built-in Help**: Comprehensive instructions and usage guidelines

## Installation

### Manual Installation (Developer Mode)

1. **Download the Extension Files**:

   - Go to the [GitHub repository](https://github.com/sairajB/gateCalculatorExtension)
   - Click the green "Code" button
   - Select "Download ZIP"
   - Extract the downloaded ZIP file to a folder on your computer

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the extracted extension folder
   - The calculator icon should appear in your browser toolbar

## Usage

### Accessing the Calculator

- **Keyboard Shortcut**: Press `Ctrl+Shift+Y` (default)
- **Browser Action**: Click the calculator icon in the toolbar
- **Popup Mode**: Right-click the extension icon and select "Open in popup"

### Basic Operations

1. Click the calculator icon or use the keyboard shortcut
2. The calculator overlay will appear on the current webpage
3. Use mouse clicks to input numbers and operations
4. Press `=` to calculate results
5. Press `C` to clear current input or `AC` to clear all

### Memory Functions

- **MS**: Store current display value in memory
- **MR**: Recall value from memory
- **M+**: Add current display value to memory
- **M-**: Subtract current display value from memory
- **MC**: Clear memory

### Angle Modes

- **Degree Mode**: Default mode for trigonometric calculations
- **Radian Mode**: Alternative angle measurement for advanced calculations
- Toggle between modes using the Deg/Rad radio buttons

### Advanced Features

- **Parentheses**: Use `(` and `)` for complex expressions
- **Scientific Notation**: Use `Exp` for exponential notation (e.g., 1.5e+10)
- **Constants**: Quick access to mathematical constants like π and e
- **Function Chaining**: Combine multiple operations in sequence

## Mathematical Accuracy and Limitations

### Precision Guidelines

- **General Calculations**: Accurate up to 8 decimal places
- **Factorial Operations**: Precise up to 14 digits (maximum n = 170)
- **Logarithmic Functions**: Precise up to 5 decimal places
- **Hyperbolic Functions**: Precise up to 5 decimal places
- **Modulus Operations**: Best results with numbers less than 15 digits

### Supported Range

- **Minimum Value**: 10⁻³²³
- **Maximum Value**: 10³⁰⁸
- **Overflow Handling**: Displays "Infinity" for values exceeding range
- **Error Handling**: Displays "Math Error" for undefined operations

### Special Cases

- **Division by Zero**: Returns "Math Error"
- **Invalid Trigonometric Inputs**: Returns "Math Error" for out-of-domain values
- **Negative Factorials**: Returns "Math Error"
- **Complex Number Results**: Not supported (returns "Math Error")

## Best Practices

### Calculation Guidelines

- Always press `C` before starting new calculations
- Use parentheses to ensure proper order of operations
- Select appropriate angle mode (Deg/Rad) before trigonometric calculations
- Avoid changing angle mode during active calculations
- Use memory functions for intermediate results in complex calculations

### Performance Optimization

- Close calculator when not in use to free system resources
- Use the minimize function for long-term availability
- Clear memory periodically to prevent accumulation of old values

## Troubleshooting

### Common Issues

**Calculator not appearing**: Check if the extension is enabled in Chrome extensions page
**Keyboard shortcut not working**: Verify the shortcut hasn't been overridden by other extensions
**Calculation errors**: Ensure inputs are within supported ranges and formats
**Memory issues**: Clear memory and restart calculation sequence

### Browser Compatibility

- **Supported**: Chrome 88+, Edge 88+, Opera 74+
- **Manifest Version**: V3 (latest Chrome extension standards)
- **Required Permissions**: Active tab access for overlay functionality
