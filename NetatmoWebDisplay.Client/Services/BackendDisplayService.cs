using NetatmoWebDisplay.Client.Model;
using System.Net.Http.Json;

namespace NetatmoWebDisplay.Client.Services;

public class BackendDisplayService : IDisplayService
{
    private readonly HttpClient _httpClient;

    public BackendDisplayService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<Display?> GetDisplay()
    {
        return await _httpClient.GetFromJsonAsync<Display>("api/Display");
    }
}