using NetatmoWebDisplay.Client.Model;

namespace NetatmoWebDisplay.Client.Services;

public interface IDisplayService 
{
    Task<Display?> GetDisplay();
}