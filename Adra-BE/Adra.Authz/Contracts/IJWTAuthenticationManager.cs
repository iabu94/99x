using System;
using System.Collections.Generic;

namespace Adra.Authz.Contracts
{
    public interface IJWTAuthenticationManager
    {
        string Authenticate(string username, string password);
        IDictionary<string, Tuple<string, string>> Tokens { get; }
    }
}
