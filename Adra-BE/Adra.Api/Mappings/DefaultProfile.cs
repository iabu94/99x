using Adra.Api.DTOs;
using Adra.Domain.Entities;
using Adra.Infrastructure.Models;
using AutoMapper;

namespace Adra.Api.Mappings
{
    public class DefaultProfile : Profile
    {
        public DefaultProfile()
        {
            CreateMap<Report, ReportUploadDto>()
                .ForMember(r => r.Month, m => m.MapFrom(d => d.MonthId))
                .ReverseMap()
                .ForMember(r => r.Month, m => m.Ignore());

            CreateMap<Balance, BalanceInfo>()
                .ReverseMap();

            CreateMap<Report, ReportDto>()
                .ForMember(r => r.Month, m => m.MapFrom(d => d.MonthId))
                .ReverseMap()
                .ForMember(r => r.Month, m => m.Ignore());

            CreateMap<Balance, BalanceDto>();
        }
    }
}
