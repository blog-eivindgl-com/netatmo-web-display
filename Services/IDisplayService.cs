using NetatmoWebDisplay.Model;

namespace NetatmoWebDisplay.Services;

public interface IDisplayService 
{
    Task<Display?> GetDisplay();
}