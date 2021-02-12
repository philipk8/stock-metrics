### Background and Overview 

Stock metrics is a data visualization application for displaying stock price charts over different timeframes. Various equity indices benchmarks may be overlayed for comparison.

![show image](http://github.com/philipk8/stock-metrics/blob/main/readme_assets/stock-metrics-show.png?raw=true)

### Functionality and MVPs

In Stock Metrics, users will be able to:
- Render data from IEX Cloud
- Search via stock ticker symbol.
- Have chart render with transition effects using D3. 

In addition, this project will include:
- An About section to explain the metrics plus how to use the app.
- Benchmarks added to the chart, to compare price performance for a particular stock to a benchmarks like the S&P500.

### Wireframes 

![wireframe image](http://github.com/philipk8/stock-metrics/blob/main/readme_assets/wireframe.png?raw=true)

### Architecture and Technology

Javascript, HTML and SCSS. Chart built by D3.js library. Stock information from IEX Cloud API. 

### Implementation Timeline 
- Day 1: 
  - Set up file structure and fix all current node installation issues
  - Explore IEX Cloud API and ability to get data needed. 
- Day 2:
  - Use D3 to render required chart data with benchmark overlays
- Day 3: 
  - Set up search by ticker function
- Day 4: 
  - Write and design the About section
- Day 5: 
  - Add and adjust CSS and transitions in data display

### Bonus 
- Ability to overlay multiple stock tickers to compare across different stocks
- Set up preset set of popular stock names for selection in groups
  
