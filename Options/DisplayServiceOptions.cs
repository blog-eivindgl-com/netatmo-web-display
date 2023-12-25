namespace NetatmoWebDisplay.Options;

public class DisplayServiceOptions
{
    public string Type { get; set; }
}

public class NetatmoProxyDisplayServiceOptions : DisplayServiceOptions
{
    public string BaseUri { get; set; }
}