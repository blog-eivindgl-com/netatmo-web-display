using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using NetatmoWebDisplay.Client.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.Services.AddScoped(sp =>
    new HttpClient
    {
        BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)
    });
builder.Services.AddScoped<IDisplayService, BackendDisplayService>();

await builder.Build().RunAsync();
