using Microsoft.Extensions.Options;
using NetatmoWebDisplay.Options;
using NetatmoWebDisplay.Model;

namespace NetatmoWebDisplay.Services;

public class NetatmoProxyDisplayService : IDisplayService
{
    private readonly HttpClient _httpClient;

    public NetatmoProxyDisplayService(IOptions<NetatmoProxyDisplayServiceOptions> options, HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri(options.Value.BaseUri);
    }

    public async Task<Display?> GetDisplay()
    {
        return await _httpClient.GetFromJsonAsync<Display>("api/Display");
    }
}