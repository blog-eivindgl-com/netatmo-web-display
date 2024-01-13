namespace NetatmoWebDisplay.Client.Model;
public class Widget
{
    public string Type { get; set; }
    public string Description { get; set; }
    public string Value { get; set; }
    public decimal? OutTemp { get; set; }
    public string Trend { get; set; }
    public string MinValue { get; set; }
    public string MaxValue { get; set; }
    public string MinTime { get; set; }
    public string MaxTime { get; set; }
    public int? BatteryLevel { get; set; }
    public string SunOrMoon { get; set; }
    public string Angle { get; set; }
    public string MaxAngle { get; set; }
    public BatteryIndicator[] BatteryIndicators { get; set; }
}