using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Company.Function;

public class CounterService
{
    private readonly Container _container;

    public CounterService(IConfiguration config)
    {   
        string connectionString = config["AzureResumeConnectionString"];
        
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new Exception("AzureResumeConnectionString no está configurado.");
        }

        CosmosClient cosmosClient = new CosmosClient(connectionString);
        var database = cosmosClient.GetDatabase("VisitCounterDB");
        _container = database.GetContainer("Visits");
    }

    public async Task<Counter> GetCounterAsync()
    {
        try
        {
            return await _container.ReadItemAsync<Counter>("visit_counter", new PartitionKey("visit_counter"));
        }
        catch (CosmosException ex)
        {
            Console.WriteLine($"Error de CosmosDB: {ex.Message}");
            return new Counter { Id = "visit_counter", Count = 0 };
        }
    }

    public async Task UpdateCounterAsync(Counter counter)
    {
        counter.Count++;
        await _container.UpsertItemAsync(counter);
    }
}
